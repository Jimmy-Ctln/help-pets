'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import loginCat from '@/public/assets/loginCat.jpg';
import Image from 'next/image';
import {} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="mt-28 flex justify-center items-center">
      <Card className="w-[80%] min-h-full">
        <div className="flex h-full">
          <div className="w-1/2 flex items-stretch">
            <Image
              src={loginCat}
              alt="Photo d'un chat pour la connexion"
              className="rounded-l-lg object-cover h-full"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <div className="w-1/3 mx-auto flex flex-col justify-center py-6">
            <CardHeader>
              <CardTitle className="mx-auto text-2xl">Créer un compte</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full mt-4 items-center gap-4">
                  <div className="flex flex-col space-y-1.5 w-full mx-auto">
                    <Label>Association</Label>
                    <Input
                      id="association"
                      type="text"
                      placeholder="Entrez le nom de votre association"
                    />
                    <Label className="mt-2" htmlFor="email">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="Entrez votre email" />
                    <Label className="mt-2" htmlFor="password">
                      Mot de passe
                    </Label>
                    <Input id="password" type="password" placeholder="Entrez votre mot de passe" />
                  </div>
                  <Button className="w-full mx-auto mt-2">Créer un compte</Button>
                </div>
                <div className="relative my-4 flex items-center justify-center overflow-hidden">
                  <Separator />
                  <div className="px-2 text-center bg-background text-sm">OU</div>
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
                  Créer un compte avec Google
                </Button>
              </form>
            </CardContent>
            <CardFooter className="mt-4 flex text-xs mx-auto">
              <span>Vous avez déjà un compte ?&nbsp;</span>
              <Link href={'login'} className="text-blue-500">
                Se connecter
              </Link>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
