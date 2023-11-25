import * as React from "react"
 
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
 
export function SCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Social Responsibility</CardTitle>
        <CardDescription>Diversity and inclusion policies, well-being programmes, community engagement initiatives.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Button variant="outline">Upload</Button>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Label htmlFor="framework">OR</Label>
                <Input id="name" placeholder="Paste your URL" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button >Upload</Button>
      </CardFooter>
    </Card>
  )
}