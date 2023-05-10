let game = {
    techs: [ 'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],
    cards: null,
    lockMode: false,
    firstCard: null,
    firstCardId: null,
    secondCard: null,
    secondCardId: null,

    checkGameOver: function () {
        return this.cards.filter(card => !card.flipped).length === 0;
    },

    unflipCard: function () {
        this.firstCard.flipped = false;
        document.getElementById(this.firstCardId).classList.remove("flip");
        this.firstCardId = null;
        this.secondCard.flipped = false;
        document.getElementById(this.secondCardId).classList.remove("flip")
        this.secondCardId = null;
        this.clearCards();
    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    setCard: function (id) {
        let card = this.cards.filter((card) => card.id === id)[ 0 ];

        if (card.flipped || this.lockMode) {
            return false;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            this.firstCardId = id;
            document.getElementById(id).classList.add("flip")
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.secondCardId = id;
            document.getElementById(id).classList.add("flip")
            this.lockMode = true;
            return true;
        }
    },

    createCardsFromTechs: function () {
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairsFromTech(tech));
        })
        this.cards = this.cards.flatMap((pair) => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairsFromTech: function (tech) {
        return [ {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        } ]
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [ this.cards[ randomIndex ], this.cards[ currentIndex ] ] = [ this.cards[ currentIndex ], this.cards[ randomIndex ] ]
        }
    },

    flipCard: function (cardId, gameOverCallBack) {
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                if (this.checkMatch()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                        //GameOver
                        gameOverCallBack();

                    };
                } else {
                    setTimeout(() => {
                        //NoMatch
                        this.unflipCard();
                    }, 1000);
                };
            };
        };
    }
}