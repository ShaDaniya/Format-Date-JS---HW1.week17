const comments = [];
        const comment = document.getElementById('newComment').value;

        function addComment() {
            const comment = document.getElementById('newComment').value;
            console.log(comment);
            const result = comment.replace(/viagra|xxx/ig, '***');
            console.log(result);



            comments.push(result);
            generateComment();
            document.getElementById('newComment').value = '';
            console.log(comments);

        }

        function generateComment() {
            let optionsString = '';
            for (let comment of comments) {
                optionsString +=
                    `<div>
        <p class="p__comment" id="markComment">${comment}</p><button onclick="markComment('red');">Удалить</button>
    </div>`;
            }

            document.getElementById('container').innerHTML = optionsString;

        }


        // как удалить коммент по кнопке я не нашла, по кнопке он становится красным  (только работает все равно неправильно, выделяет красным только первый коммент)
        function markComment(color) {
            document.getElementById("markComment").style.background = color;
        }

        const str = comment;
        const result = str.replace("viagra", "***");
        console.log(result);

        document.addEventListener("DOMContentLoaded", function () {
            generateComment();
        });