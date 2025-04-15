import PreviewWrapper from "../PreviewWrapper";
import Button from "../ui/Button";

const ButtonPage = () => {
  return (
    <div className="container max-w-4xl py-10">
      <div className="space-y-6">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Button</h2>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button.
          </p>
        </div>
        <div className="grid gap-6">
          <PreviewWrapper
            label="Button Variants"
            variant="centered"
            preview={
              <div className="flex flex-wrap items-center gap-4">
                <Button label="Default" />
                <Button variant="secondary" label="Secondary" />
                <Button variant="outline" label="Outline" />
                <Button variant="destructive" label="Destructive" />
                <Button variant="withIcon" icon="settings" label="Settings" />
                <Button variant="icon" icon="settings" />
              </div>
            }
            code={`
import { Button } from "@/components/ui/button"

<Button label="Default" />
<Button variant="secondary" label="Secondary" />
<Button variant="outline" label="Outline" />
<Button variant="destructive" label="Destructive" />
<Button variant="withIcon" icon="settings" label="Settings" />
<Button variant="icon" icon="settings" />`}
          />

          <PreviewWrapper
            label="Button Sizes"
            variant="centered"
            preview={
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" label="Small" />
                <Button size="md" label="Default" />
                <Button size="lg" label="Large" />
              </div>
            }
            code={`
import { Button } from "@/components/ui/button"

<Button size="sm" label="Small" />
<Button size="md" label="Default" />
<Button size="lg" label="Large" />`}
          />

          <PreviewWrapper
            label="With Icons"
            variant="centered"
            preview={
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="withIcon"
                  icon="mail"
                  label="Login with Email"
                />
                <Button
                  variant="withIcon"
                  icon="github"
                  label="Login with Github"
                />
                <Button variant="withIcon" icon="settings" label="Settings" />
              </div>
            }
            code={`
import { Button } from "@/components/ui/button"

<Button variant="withIcon" icon="mail" label="Login with Email" />
<Button variant="withIcon" icon="github" label="Login with Github" />
<Button variant="withIcon" icon="settings" label="Settings" variant="outline" />`}
          />

          <PreviewWrapper
            label="Icon Buttons"
            variant="centered"
            preview={
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="icon" icon="settings" />
                <Button variant="icon" icon="bell" />
                <Button variant="destructive" />
              </div>
            }
            code={`
import { Button } from "@/components/ui/button"

<Button variant="icon" icon="settings" />
<Button variant="icon" icon="bell" />
<Button variant="icon" icon="trash" variant="destructive" />`}
          />

          <PreviewWrapper
            label="Loading State"
            variant="centered"
            preview={
              <div className="flex flex-wrap items-center gap-4">
                <Button label="Disabled" />
                <Button variant="withIcon" icon="loader" label="Please wait" />
                <Button variant="outline" label="Outline disabled" />
              </div>
            }
            code={`
import { Button } from "@/components/ui/button"

<Button disabled label="Disabled" />
<Button variant="withIcon" icon="loader" disabled label="Please wait" />
<Button variant="outline" disabled label="Outline disabled" />`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Usage</h3>
          <PreviewWrapper
            label="Example"
            preview={<Button variant="default" size="md" label="Click me" />}
            code={`
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <Button variant="default" size="md" label="Click me" />
  )
}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
