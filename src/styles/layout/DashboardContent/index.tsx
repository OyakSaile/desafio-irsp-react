interface DashboardContextProps {
  title: string
  children: React.ReactNode
}
export const DashboardContent: React.FC<DashboardContextProps> = ({
  children,
  title,
}) => {
  return (
    <div className="p-2 md:p-6 flex-1 ">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-500">
        {title}
      </h2>
      <div className="py-5 min-h-screen">{children}</div>
    </div>
  )
}
