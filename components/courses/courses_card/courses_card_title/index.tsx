export function CoursesCardTitle({ title }: { title: string }) {
  return (
    <h1 className="text-lg font-medium text-[var(--white-color)] tracking-tight rounded-2xl bg-[var(--green-color)] border border-[var(--green-color)] p-1 flex items-center justify-center shadow-md w-10/12 self-center">
      {title}
    </h1>
  );
}
