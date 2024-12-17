(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.getElementById("all-button"),l=document.getElementById("movies__container");c.addEventListener("click",u);const d="http://localhost:3000";function a(){return fetch(`${d}/movies`).then(i=>i.json())}function u(){a().then(m)}function m(i){const n=i.map(o=>`<li class="movies__item">
                <div>
                    <img class="movies__image" src="${o.image}" alt="#" onerror="this.src='https://via.placeholder.com/150';">
                    <h2 class="movies__title"><b>Title: </b>${o.title}</h2>
                    <p class="movies__genre"><b>Genre: </b>${o.genre}</p>
                    <p class="movies__year"><b>Year: </b>${o.year}</p>
                </div>
                <div>
                    <button class="movies__item-btn" type="button" id="edit__btn">edit</button>
                    <button class="movies__item-btn" type="button" id="delete__btn">delete</button>
                </div>
            </li>`).join("");l.insertAdjacentHTML("beforeend",n)}
//# sourceMappingURL=index.js.map
