import bcrypt from "bcrypt";

export const makeHashedString = async (data: string) => {
  try {
    const saltRounds = Number(process.env.SALT) || 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(data, salt);
    return hash;
  } catch (err) {
    console.error("Error generating hash:", err);
    throw err;
  }
};

export const compareHashedData = async(plainText:string, dbHashedData:string) => {
    try{
        const bool = await bcrypt.compare(plainText, dbHashedData)
        return bool
    }catch(err){
        throw new Error(`error while comparing password`)
    }
    
}
