import OtpInput from "../Otp/otp";

export default function OTPPage() {
  const handleOTPComplete = (otp: string) => {
    console.log("OTP entered:", otp);
    // Call API to verify
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="p-6 rounded-lg shadow-lg bg-white">
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
        <OtpInput length={6} onOTPComplete={handleOTPComplete} variant="glass" />
        <OtpInput length={6} onOTPComplete={handleOTPComplete} variant="animated" />


      </div>
    </div>
  );
}
