// src/app/firebase/upload.ts
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "./firebase";

export async function uploadFile(file: File): Promise<string> {
  const fileRef = ref(storage, `uploads/${uuidv4()}-${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}
