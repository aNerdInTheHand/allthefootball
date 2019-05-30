provider "aws" {
  region = "eu-west-1"
}

terraform {
  backend "s3" {
    bucket = "provisioning.allthe.football"
    key = "terraform/key"
    region = "eu-west-1"
  }
}

resource "aws_s3_bucket" "public_website" {
  bucket = "allthe.football"
  acl    = "public-read"
  policy = "${file("policies/website-bucket-policy.json")}"

  website {
    index_document = "index.html"
  }
}
