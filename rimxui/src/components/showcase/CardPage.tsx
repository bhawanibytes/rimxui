import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../Cards/Card";
import PreviewWrapper from "../PreviewWrapper";

export const CardPage = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium">
          <span>Components</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span>Card</span>
        </div>
        <h1 className="text-h1 text-neutral-900 dark:text-neutral-100">Card</h1>
        <p className="text-body-lg text-neutral-500 dark:text-neutral-400">
          A versatile card component for displaying content in a contained
          format with various styles and customizations.
        </p>
      </div>

      <PreviewWrapper
        label="Basic Card"
        variant="centered"
        preview={
          <Card>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardContent>
              This is the main content of the card. You can put any content
              here.
            </CardContent>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        }
        code={`<Card>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card Description</CardDescription>
  <CardContent>
    This is the main content of the card. You can put any content here.
  </CardContent>
  <CardFooter>Card Footer</CardFooter>
</Card>`}
      />

      <PreviewWrapper
        label="Card with Form"
        variant="centered"
        preview={
          <Card>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to login</CardDescription>
            <CardContent className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
                Login
              </button>
            </CardContent>
            <CardFooter className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardTitle>Login</CardTitle>
  <CardDescription>Enter your credentials to login</CardDescription>
  <CardContent className="flex flex-col gap-4">
    <div>
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-2 border rounded-md"
      />
    </div>
    <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
      Login
    </button>
  </CardContent>
  <CardFooter className="text-center text-sm text-gray-500">
    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
  </CardFooter>
</Card>`}
      />

      <PreviewWrapper
        label="Card with Image"
        variant="centered"
        preview={
          <Card>
            <img
              src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
              alt="Card image"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold mb-2">
                Beautiful Landscape
              </h3>
              <p className="text-gray-600">
                This is a beautiful landscape image displayed in a card with a
                title and description.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Posted by John Doe</span>
              <button className="text-blue-500 hover:text-blue-600">
                Read more
              </button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <img
    src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538"
    alt="Card image"
    className="w-full h-48 object-cover rounded-t-xl"
  />
  <CardContent className="pt-4">
    <h3 className="text-xl font-semibold mb-2">Beautiful Landscape</h3>
    <p className="text-gray-600">
      This is a beautiful landscape image displayed in a card with a title and description.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between items-center">
    <span className="text-sm text-gray-500">Posted by John Doe</span>
    <button className="text-blue-500 hover:text-blue-600">Read more</button>
  </CardFooter>
</Card>`}
      />
    </div>
  );
};
