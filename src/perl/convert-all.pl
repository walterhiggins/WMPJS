#!/usr/bin/perl
my @files = glob('./target/delivery/*.txt');
foreach (@files){  `perl src/perl/Markdown.pl $_ > $_.html` }
