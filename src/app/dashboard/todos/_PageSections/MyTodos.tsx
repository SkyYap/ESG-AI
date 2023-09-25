'use client';

import { Card, CardDescription, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { UpdateTodo, DeleteTodo } from '@/lib/API/Database/todos/Browser/mutations';
import { Button, buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';

const TodoCard = ({ id, title, description }) => {
  const Delete = async () => {
    await DeleteTodo(id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/dashboard/todos/edit/${id}`}
          className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'mr-6')}
        >
          Edit
        </Link>
        <Button onClick={Delete} variant="destructive">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

const MyTodos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default MyTodos;
