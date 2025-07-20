import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "./api.service";
import { Note } from "../views/app/Notes";

const PATH = "todos";

function getAllTodos() {
  return axiosClient.get(`${PATH}`);
}

async function getAllTodosScroll(page: number) {
  const result = await axiosClient.get(`${PATH}?page=${page}`);
  return result.data;
}

function removeTodo(id: string) {
  return axiosClient.delete(`${PATH}/${id}`);
}

function createTodo(data: Note) {
  return axiosClient.post(`${PATH}`, { ...data, done: false });
}

function updateTodo(data: Note) {
  return axiosClient.patch(`${PATH}/${data._id}`, data);
}

export function useGetTodos() {
  return useQuery({
    queryFn: getAllTodos,
    queryKey: ["getAllTodos"],
  });
}

export function useRemoveTodo() {
  return useMutation({
    mutationFn: removeTodo,
    mutationKey: ["removeTodo"],
  });
}

export function useCreateTodo() {
  return useMutation({
    mutationFn: createTodo,
    mutationKey: ["createTodo"],
  });
}

export function useUpdateTodo() {
  return useMutation({
    mutationFn: updateTodo,
    mutationKey: ["updateTodo"],
  });
}

export function useGetAllTodosScroll() {
  return useInfiniteQuery({
    queryKey: ["getAllTodosScroll"],
    queryFn: ({ pageParam }) => getAllTodosScroll(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
}
