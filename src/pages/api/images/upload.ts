import fs from "fs";
import path from "path";
import formidable, { IncomingForm } from "formidable-serverless";
import { NextApiRequest, NextApiResponse } from "next";

// ファイルのアップロード処理
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const form = new IncomingForm();
  const uploadDir = path.join(process.cwd(), "public/images");

  // `public/images` フォルダが存在しない場合は作成
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  form.uploadDir = uploadDir;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res
        .status(500)
        .json({ error: "ファイルのアップロード中にエラーが発生しました" });
      return;
    }

    const file = files.file;
    if (!file) {
      res.status(400).json({ error: "ファイルが見つかりません" });
      return;
    }

    // アップロードされたファイルをpublic/imagesに移動
    const newPath = path.join(
      uploadDir,
      file.newFilename || file.originalFilename
    );
    fs.rename(file.filepath, newPath, (err) => {
      if (err) {
        res
          .status(500)
          .json({ error: "ファイルの保存中にエラーが発生しました" });
        return;
      }
      res
        .status(200)
        .json({ message: "ファイルが正常にアップロードされました" });
    });
  });
}
