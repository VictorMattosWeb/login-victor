

interface Props {
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[url('/bannerInit.svg')] bg-no-repeat bg-cover bg-fixed bg-center">
      {props.children}
    </div>
  );
}
