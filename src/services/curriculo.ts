const DownloadButton = () => {
    const link = document.createElement('a');
    link.href = '/Danilo Silva.pdf'; // Caminho correto (começando com "/")
    link.download = 'Danilo Silva.pdf'; // Nome que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  export default DownloadButton;
  