import { CliTabs } from "../CliTabs/CliTab";
import OtpInput from "../Otp/otp";

export default function OTPPage() {
  const handleOTPComplete = (otp: string) => {
    console.log("OTP entered:", otp);
    // Call API to verify
  };

  return (
    <>
      <section id="#installation">
        <h1 className="text-h4 mb-6">Installation</h1>
        <CliTabs
          commands={{
            pnpm: "pnpm dlx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            npm: "npx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            bun: "bunx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
            yarn: "yarn dlx shadcn@latest add http://rimxui.vercel.app/registry/otpinputs.json",
          }}
        />
      </section>
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-neutral-900">
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-900">
          <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
          <OtpInput
            length={6}
            variant="circle"
            onOTPComplete={handleOTPComplete}
          />
          <OtpInput
            length={6}
            variant="large"
            onOTPComplete={handleOTPComplete}
          />
          <OtpInput
            length={6}
            onOTPComplete={handleOTPComplete}
            variant="glass"
          />
          <OtpInput
            length={6}
            onOTPComplete={handleOTPComplete}
            variant="animated"
          />
        </div>
      </div>
    </>
  );
}
