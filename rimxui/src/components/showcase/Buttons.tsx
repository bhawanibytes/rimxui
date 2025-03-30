import Button from "../ui/Button";

const Buttons = () => {
  return (
    <div className="text-gray-800 flex flex-col gap-8 justify-center min-h-screen w-screen p-16 bg-slate-300">
      <div>
        <h3 className="text-xl font-medium">Small Size</h3>
        <div className="flex gap-8 flex-wrap justify-center bg-white p-8">
          <Button size="sm" />
          <Button size="sm" variant="Secondary" />
          <Button size="sm" variant="Outline" />
          <Button size="sm" variant="Destructive" />
          <Button size="sm" variant="Icon" />
          <Button size="sm" variant="WithIcon" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium">Medium Size</h3>
        <div className="flex gap-8 flex-wrap justify-center bg-white p-8">
          <Button />
          <Button variant="Secondary" />
          <Button variant="Outline" />
          <Button variant="Destructive" />
          <Button variant="Icon" />
          <Button variant="WithIcon" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium">Large Size </h3>
        <div className="flex gap-8 flex-wrap justify-center bg-white p-8">
          <Button size="lg" />
          <Button size="lg" variant="Secondary" />
          <Button size="lg" variant="Outline" />
          <Button size="lg" variant="Destructive" />
          <Button size="lg" variant="Icon" />
          <Button size="lg" variant="WithIcon" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-medium">Dark Mode</h3>
        <div className="dark flex flex-wrap justify-center gap-8 bg-gray-800 p-8">
          <Button />
          <Button variant="Secondary" />
          <Button variant="Outline" />
          <Button variant="Destructive" />
          <Button variant="Icon" />
          <Button variant="WithIcon" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
