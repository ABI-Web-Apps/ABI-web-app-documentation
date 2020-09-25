new Vue ({

    el: "#app",
    data: {

        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        explain: []

    },

    methods: {

        //startGame-function===============================================================
        startGame: function () {

            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.explain = [];

        },

        //attack-function ================================================================
        attack: function () {

            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.explain.unshift({
                 isPlayer: true,
                 text: `Player hits Monster for ${damage}`,
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },

        //specialAttack-function =======================================================
        specialAttack: function() {

             let damage = this.calculateDamage(10, 15);
             this.monsterHealth -= damage;
             this.explain.unshift( {
                 isPlayer: true,
                 text: `Player hits Monster hard for ${damage}`,
             });
             if (this.checkWin()) {
                 return;
             }

             this.monsterAttack();

        },

        //heal-function =================================================================
        heal: function() {

            if ( this.playerHealth <= 90) {

                 this.playerHealth += 10;
            } else {

                this.playerHealth = 100;
            }

            this.explain.unshift({
                isPlayer: true,
                text: `Player heals for 10`,
            })

            this.monsterAttack();

        },

        //giveUp-function =============================================================
        giveUp: function() {

            this.gameIsRunning = false;

        },


        //calculateDamage-function=====================================================
        calculateDamage: function (min, max) {

            return  Math.max(Math.floor((Math.random() * max) + 1), min);

        },

        //monsterAttack-function=======================================================
        monsterAttack: function () {

             let damage = this.calculateDamage(5, 12);
             this.playerHealth -= damage;
             this.explain.unshift({
                 isPlayer: false,
                 text: `Monster hits Player for ${damage}`,
             })
             this.checkWin();

        },

        //checkWin-function:==========================================================
        checkWin: function() {

            if ( this.monsterHealth <= 0 ) {

                if ( confirm("Great, You Won! Do You Want To Start Again?") ) {

                    this.startGame();

                } else {

                    this.gameIsRunning = false
                }
                return true;

            }else if ( this.playerHealth <= 0 ) {

                if ( confirm("GameOver!, You Lost! Do You Want To Start Again?") ) {

                    this.startGame();

                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },

    },

})

