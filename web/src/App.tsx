import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import useTheme from "./hooks/useTheme"
import { themeType } from "../types/types.d";
function App() {

  const setTheme = useTheme();
  return (
    <Card
      className="bg-dark-bg color-white"
    >
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
  <button onClick={()=>setTheme(themeType.dark)}>Dark</button>
  <button onClick={()=>setTheme(themeType.light)}>Light</button>

</Card>

  )
}

export default App
