<?php

declare(strict_types=1);

function getTransactionFiles(string $dirPath): array {
    $files = [];

    foreach (scandir($dirPath) as $file) {
        if (is_dir($file)) {
            continue;
        }

        $files[] = $dirPath . $file;
    }

    return $files;
}

function getTransactions(string $filePath): array {
    if (! file_exists($filePath)) {
        trigger_error('File "' . $filePath . '" does not exist!', E_USER_ERROR);
    }

    $file = fopen($filePath, 'r');

    fgetcsv($file);

    $transactions = [];

    while (($transaction = fgetcsv($file)) !== false) {
        $transactions[] = $transaction;
    }

    return $transactions;
}
