import { LoginForm } from '@/features/auth';

export const LoginPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-stone-50 px-2 py-6">
      <div className="w-full max-w-520">
        <LoginForm />
      </div>
    </div>
  );
};
