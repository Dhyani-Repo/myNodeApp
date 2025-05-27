import { PrismaClient } from "@prisma/client"

export class DBPostgres {
    static prisma: PrismaClient
    private pgDb : PrismaClient
    private constructor(){
        this.pgDb = new PrismaClient()
    }
    public static getPrismaClient = ():PrismaClient => {
        if(!this.prisma){this.prisma = new DBPostgres().pgDb}
        return this.prisma
    }
    public static closeConnection = async(): Promise<void> => {
    if (this.prisma) {
      await this.prisma.$disconnect();
      this.prisma = undefined as unknown as PrismaClient;
    }
  }

}