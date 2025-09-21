import LoaderFiveDemo from "@/components/loader-five-demo";

export default function LoaderDemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold text-foreground">Loader Five Demo</h1>
        <div className="p-8 border rounded-lg bg-card">
          <LoaderFiveDemo />
        </div>
        <p className="text-muted-foreground">
          This demonstrates the LoaderFive component with animated text
        </p>
      </div>
    </div>
  );
}