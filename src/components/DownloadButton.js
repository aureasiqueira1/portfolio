import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../public/CV-ÁureaRibeiro.pdf";

const DownloadButton = () => {
  const handleDownloadClick = () => {
    // Substitua 'URL_DO_SEU_PDF' pela URL do seu arquivo PDF
    const pdfUrl = pdf;

    // Cria um elemento <a> temporário
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "CV-ÁureaRibeiro.pdf"; // Defina o nome do arquivo como desejar

    // Simula um clique no link para iniciar o download
    link.click();
  };

  return (
    <span className="curriculo" onClick={handleDownloadClick}>
      <AiOutlineDownload />
      CURRÍCULO
    </span>
  );
};

export default DownloadButton;
