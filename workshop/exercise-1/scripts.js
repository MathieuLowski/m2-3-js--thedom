const main = document.querySelector('main');

const title = document.createElement('h1');
const smallTitle = document.createElement('h2');
const intro = document.createElement('p');
const robin = document.createElement('img');
const rating = document.createElement('p');
const partOne = document.createElement('p');
const parTwo = document.createElement('p');
const info_ref = document.createElement('a');

title.innerText='The best How I Met Your Mother episode (according to fans)';
intro.innerText='As impossible as it seems to name just 1 of the 208legendary episodes as the “best”, the fans havespoken and the highest rated episode is… wait for it…';
smallTitle.innerText='The Slap Bet (Season 2, Episode 9)';
rating.innerText='IMDB Rating: 9.5';
robin.src = './images/robin-sparkles.jpg';
partOne.innerText='In this episode, Ted is learning a few secrets aboutRobin, namely that she has an unexplained aversionto the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
parTwo.innerText='In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- availablefor all of eternity (horrible call Barney).';
info_ref.href= 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/';
info_ref.innerText='Source';

main.appendChild(title);
main.appendChild(intro);
main.appendChild(smallTitle);
main.appendChild(rating);
main.appendChild(robin);
main.appendChild(partOne);
main.appendChild(parTwo);
main.appendChild(info_ref);

const styles= document.createElement('link');
styles.rel ='stylesheet';
styles.href = 'styles.css';
document.head.appendChild(styles);


