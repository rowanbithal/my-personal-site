import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const ThemePicker = () => {
  const handleThemeChange = (value: string) => {
    document.documentElement.className = value;
  };
  return (
    <Select onValueChange={handleThemeChange}>
      <SelectTrigger className="w-[180px]">Select Theme</SelectTrigger>
      <SelectContent>
        <SelectItem value="theme-light">Light</SelectItem>
        <SelectItem value="theme-dark">Dark</SelectItem>
        <SelectItem value="theme-blue">Blue</SelectItem>
        <SelectItem value="theme-pink">Pink</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemePicker;
