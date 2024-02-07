const buttons = document.querySelectorAll('.btn-descricao');
const descricoes = document.querySelectorAll('.descricao');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        const descricao = descricoes[index];
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');
        
        if (this.classList.contains('active')) {
            // Se o botão já estiver ativo, fecha a descrição
            descricao.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
            this.classList.remove('active');
        } else {
            // Se o botão não estiver ativo, fecha todas as outras descrições e abre esta
            buttons.forEach(button => {
                button.classList.remove('active');
                button.querySelector('.plus-icon').style.display = 'block';
                button.querySelector('.minus-icon').style.display = 'none';
            });
            
            descricoes.forEach(desc => desc.style.maxHeight = null);

            descricao.style.maxHeight = descricao.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
            this.classList.add('active');
        }
    });
});
