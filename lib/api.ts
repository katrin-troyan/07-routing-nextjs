import axios from "axios";
import { type Note } from "@/types/note";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag?: string;
}

export interface NoteListResponse {
  notes: Note[];
  total: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchNotes = async (
  params: FetchNotesParams = { page: 1, perPage: 12 }
): Promise<FetchNotesResponse> => {
  await delay(500);
  const { data } = await api.get<FetchNotesResponse>("/notes", { params });
  return data;
};

export const createNote = async (data: CreateNoteParams): Promise<Note> => {
  const { data: result } = await api.post<Note>("/notes", data);
  return result;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};
