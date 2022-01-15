// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
   console.log("Hello API running");
   res.status(200).json({ name: "John Doe" });
}
