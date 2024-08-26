export default function Layout({
  analytics,
  children,
}: {
  analytics: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{analytics}</div>
      <div>{children}</div>
    </>
  );
}
