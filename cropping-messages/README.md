There is a forum that has a limit of K characters per entry. In this task your job is to implement an algorithm for cropping messages that are too long.
You are given a message, consisting of English alphabet letters and spaces, that might be longer than the limit. Your algorithm should crop a
number of words from the end of the message, keeping in mind that: 
it may not crop away part of a word;
the output message may not end with a space;
the output message may not exceed the K-character limit;
the output message should be as lona as possible.
This means that, in some cases, the algorithm may need to crop away the entire message, outputting an empty string.
For example, given the text:
"Codility We test coders" With K = 14 the algorithm should output:
"Codility We"
Note that:
the output "Codility We te" would be incorrect, because the original message is cropped through the middle of a Word
the output "Codility We "would be incorrect, because it ends with a space;
the output "Codility We test coders" would be incorrect, because it exceeds the K-character limit;
the outout "Codilitv" would be incorrect. because it is shorter than the correct output.

Write a function function solution (message, K) which, given a message and an integer K, returns the message cropped to
no more than K characters described above
Examples:
1. Given message = "Codility We test coders" and K = 14, the function should return "Codility We".
2. Given message = Why not and K = 100, the function should return "Why not".
3. Given message = "Ihe quick brown fox jumps over the lazy dog" and K = 39, the function should return "The quick brown fox Jumps over the lazv
4. Given message = "To crop or not to crop" and K = 21, the function should return "To crop or not to"

Assume that:

. K is an integer within the range [1..500];
. message is a non-empty string containing at most 500 English alphabet letters and spaces. There are no spaces at
the beginning or at the end of message; also there can't be two or more consecutive spaces in message.

In vour solution. focus on correctness. The performance of vour solution
will not be the focus of the assessment.