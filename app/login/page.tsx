'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import loginCat from '@/public/assets/loginCat.jpg';
import Image from 'next/image';
import {} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Login() {
  return (
    <div className="min-h-screen justify-center flex items-center">
      <Card className="w-[80%]">
        <div className="flex">
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src={loginCat}
              alt="Photo d'un chat pour la connexion"
              className="rounded-l-lg object-cover h-full"
            />
          </div>
          <div className="w-1/3 mx-auto flex flex-col justify-center py-6">
            <CardHeader>
              <CardTitle className="mx-auto text-2xl">Connexion</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full mt-4 items-center gap-4">
                  <div className="flex flex-col space-y-1.5 w-full mx-auto">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Entrez votre email" />
                    <Label className="mt-2" htmlFor="password">
                      Mot de passe
                    </Label>
                    <Input id="password" type="password" placeholder="Entrez votre mot de passe" />
                  </div>
                  <Button className="w-full mx-auto mt-2">Se connecter</Button>
                </div>
                <div className="relative my-4 flex items-center justify-center overflow-hidden">
                  <Separator />
                  <div className="px-2 text-center bg-background text-sm">OR</div>
                  <Separator />
                </div>
                <Button className="mx-auto w-full" variant="outline">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 488 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  Se connecter avec Google
                </Button>
              </form>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
