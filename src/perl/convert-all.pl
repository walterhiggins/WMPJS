#!/usr/bin/perl
my @files = glob('./target/delivery/*.txt');
foreach (@files){  
    my $woSuffix = $_ ;
    $woSuffix =~ s/\.txt//;
    print $woSuffix;
    `perl src/perl/Markdown.pl $_ > $_.html` ;
    `pandoc $_ -o $woSuffix.docx` ;
}
