extern crate ross;
use std::fs::File;
use std::io::BufReader;

use ross::io::fastq;
use ross::io::seq::Cleanable;

#[test]
/// Test to see whether we read the challenge dataset correctly
fn challenge_dataset () {
    // Open the difficult file
    let challenge_file = File::open("testdata/four_reads.gt_16_lines.fastq").expect("Could not open testdata/four_reads.gt_16_lines.fastq");
    let challenge_buffer=BufReader::new(challenge_file);
    let challenge_reader=fastq::FastqReader::new_careful(challenge_buffer);
    let mut challenge_string = String::new();
    for seq_obj in challenge_reader {
        challenge_string.push_str(&seq_obj.to_string());
    }

    // Open the easy file
    let easy_file  = File::open("testdata/four_reads.fastq").expect("Could not open testdata/four_reads.fastq");
    let easy_buffer= BufReader::new(easy_file);
    let easy_reader=fastq::FastqReader::new(easy_buffer);
    let mut easy_string = String::new();
    for seq_obj in easy_reader {
        easy_string.push_str(&seq_obj.to_string());
    }
    
    assert_eq!(challenge_string,easy_string);
}


fn main(){
    
    let opts = vec![
        vec![
            //"z", "zebracadabra", "test help message",
        ],
    ];
    ross::parse_args(&opts);

    let my_file = File::open("/dev/stdin").expect("Could not open file");
    let my_buffer=BufReader::new(my_file);
    let fastq_reader=fastq::FastqReader::new(my_buffer);
    for seq in fastq_reader {
        seq.print();
    }
}

