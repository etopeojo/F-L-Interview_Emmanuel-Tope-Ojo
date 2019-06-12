<?php
    //Creating the solution class
    class MinimumCoinChange{
        private $coins;
        private $numCoinType;


        function __construct($coinTypes){
            $this->coins = $coinTypes;
            $this->numCoinType = count($coinTypes);
        }

        //Implementing the coin allocation solution
        function generateCoins($amount) {
             $finalResult = [];
             $totalAmount = $amount;
             sort($this->coins);

            for($i = 0; $i < $this->numCoinType; $i++){
                
                $currentTypeValue = $this->coins[$i];

                $typeCount = floor($totalAmount / $currentTypeValue);
    
                $finalResult[strval($this->coins[$i])] = $typeCount;
    
                $totalAmount -= ($currentTypeValue * $typeCount);
            }
    
            return $finalResult;
        }

        function displayResults($amount) {
            $results = $this->generateCoins($amount);
            arsort($results);   //Sort the result to be arranged in a pyramid way, that is from highest to the lowest

            echo ("<h1>Coin Generator for amount #$amount ");
            foreach($results as $key => $value){
                echo("<h3>There are(is) {$value} pieces of {$key} naira</h3>");
            }
        }
    }

    $cointypes = [25,10,7,2];
    $coinChanger = new MinimumCoinChange($cointypes);

    $coinChanger->displayResults(191);
?>