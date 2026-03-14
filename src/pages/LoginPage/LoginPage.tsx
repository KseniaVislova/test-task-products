import { LoginForm } from '@/features/auth';

export const LoginPage = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative h-[1080px] w-[1920px] max-w-full bg-stone-50">
        <LoginForm />
      </div>
    </div>
  );
};
