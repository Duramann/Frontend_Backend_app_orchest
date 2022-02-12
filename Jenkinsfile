pipeline {
    agent any
    stages{
        stage('Build Docker Image'){
            steps{
                bat 'docker-compose down'
                bat 'docker-compose up --build -d'
            }
        }
        stage('Execute Tests'){
            steps{
                bat 'npm install'
                bat 'npm --prefix ./front run test --watchAll=false'
                script { flag = true }
            }
        }
        stage('Deliver'){
            steps{
                bat 'git checkout release'
                bat 'git add .'
                bat 'git commit -m "Code after test passed'
                bat 'git push'

            }
        }
    }
}