import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const  SignInCard = () => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          Login to continue
        </CardTitle>
      </CardHeader>
      <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input 
          disabled={false} 
          placeholder="Email" 
          value={""} 
          onChange={()=>{}}
          type="email"
          required
          />
          <Input 
          disabled={false} 
          placeholder="Password" 
          value={""} 
          onChange={()=>{}}
          type="password"
          required
          />
          <Button 
          type="submit"
          disabled={false} 
          className="w-full"
          size={"lg"}
          >Continue</Button>
        </form>
      </CardContent>
    </Card>
  )
}
export default SignInCard 