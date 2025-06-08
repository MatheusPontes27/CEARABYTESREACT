<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = strip_tags(trim($_POST["nome"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensagem = strip_tags(trim($_POST["mensagem"]));

    // Validação
    if (empty($nome) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($mensagem)) {
        http_response_code(400);
        echo "Preencha todos os campos corretamente.";
        exit;
    }

    // Email para onde será enviado
    $destinatario = "comercial@cearabytes.com.br";
    $assunto = "Nova mensagem do site CearáBytes";

    $conteudo = "Nome: $nome\n";
    $conteudo .= "Email: $email\n\n";
    $conteudo .= "Mensagem:\n$mensagem\n";

    $headers = "From: $nome <$email>";

    // Enviar o e-mail
    if (mail($destinatario, $assunto, $conteudo, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!'); window.history.back();</script>";
    } else {
        echo "<script>alert('Erro ao enviar a mensagem. Tente novamente.'); window.history.back();</script>";
    }
} else {
    http_response_code(403);
    echo "Método não permitido.";
}
?>
