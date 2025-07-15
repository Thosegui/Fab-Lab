

const supabaseUrl = 'https://xnfjqesjrxelzgxtrweo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZmpxZXNqcnhlbHpneHRyd2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTMzMTEsImV4cCI6MjA2ODE4OTMxMX0.lkia2tqmyRNPNDntn0kNHxVOOeJXQXvXvgcDjtWHMzU'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

document.getElementById('guestForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    empresa: form.empresa.value,
    data: form.data.value,
    observacoes: form.observacoes.value
  };

  const mensagem = document.getElementById('mensagem');
  const { error } = await supabase
    .from('convidados')
    .insert([data]);
  if (error) {
    mensagem.textContent = error.message || 'Erro ao adicionar convidado!';
    mensagem.className = 'error';
  } else {
    mensagem.textContent = 'Convidado adicionado com sucesso!';
    mensagem.className = 'success';
    form.reset();
  }
});