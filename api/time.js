export default function handler(req, res) {
  const now = new Date();
  const jst = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  const formatted = jst.toISOString().replace("T", " ").substring(0, 19);
  const month = jst.getMonth() + 1;
  res.status(200).json({
    CurrentJST: formatted,
    CurrentMonth: String(month)
  });
}
