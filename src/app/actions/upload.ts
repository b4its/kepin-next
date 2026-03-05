"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as XLSX from "xlsx";

export async function uploadTransactionFile(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  // 1. Validasi Tipe File (Hanya Excel/CSV)
  const validTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    "application/vnd.ms-excel", // .xls
    "text/csv", // .csv
  ];

  if (!validTypes.includes(file.type)) {
    throw new Error("Format file tidak didukung. Gunakan .xlsx, .xls, atau .csv");
  }

  // 2. Baca File ke Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 3. Parsing Excel menggunakan Library 'xlsx'
  const workbook = XLSX.read(buffer, { type: "buffer", cellDates: true });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Konversi Sheet ke JSON
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  // 4. Mapping Data (Sesuaikan dengan nama kolom di Excel kamu)
  // Asumsi Header Excel: Date, Description, Amount, Type, Category
  const transactions = jsonData.map((row: any) => ({
    date: new Date(row.Date || row.date || new Date()), 
    description: row.Description || row.description || "Tanpa Keterangan",
    amount: parseFloat(row.Amount || row.amount || 0),
    type: row.Type || row.type || "Expense",
    category: row.Category || row.category || "General",
  }));

  // 5. Simpan ke Database (Bulk Insert)
  if (transactions.length > 0) {
    await prisma.transaction.createMany({
      data: transactions,
    });
  }

  // 6. Refresh data dan Redirect
  revalidatePath("/dashboard");
  
  // Arahkan ke halaman dashboard analytics (Halaman yang akan kamu buat nanti)
  redirect("/dashboard/analytics"); 
}