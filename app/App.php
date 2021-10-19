<?php

declare(strict_types=1);

function getTransactionFiles(string $dirPath): array
{
    $files = [];

    foreach (scandir($dirPath) as $file) {
        if (is_dir($file)) {
            continue;
        }

        $files[] = $dirPath . $file;
    }

    return $files;
}

function getTransactions(string $filePath): array
{
    if (!file_exists($filePath)) {
        trigger_error('File "' . $filePath . '" does not exist!', E_USER_ERROR);
    }

    $file = fopen($filePath, 'r');

    fgetcsv($file);

    $transactions = [];

    while (($transaction = fgetcsv($file)) !== false) {
        $transactions[] = parseTransaction($transaction);
    }

    return $transactions;
}

function parseTransaction(array $transactionRow): array
{
    [$date, $checkNumber, $description, $amount] = $transactionRow;

    $amount = (float)str_replace(['$', ','], '', $amount);

    return [
        'date' => $date,
        'checkNumber' => $checkNumber,
        'description' => $description,
        'amount' => $amount
    ];
}
