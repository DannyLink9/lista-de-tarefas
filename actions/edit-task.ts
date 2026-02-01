"use server";

import { prisma } from "@/utils/prisma";

type EditedTaskProps = {
  idTask: string;
  newTask: string;
};

export const editTask = async ({ idTask, newTask }: EditedTaskProps) => {
  try {
    if (!idTask || !newTask) return;

    const editedTask = await prisma.tasks.update({
      where: { id: idTask },
      data: { task: newTask },
    });

    if (!editedTask) return;

    return editedTask;
  } catch (error) {
    throw error;
  }
};
