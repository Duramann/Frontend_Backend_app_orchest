pipeline {
    tools {nodejs "NODE.JS"}
    agent any
    stages{
        stage('Switching to release branch'){
            steps{
                bat 'git checkout release'
            }
        }
        stage('Build Docker Image'){
            steps{
                bat 'docker-compose down'
                bat 'docker-compose up --build -d'
            }
        }
        stage('Execute Tests'){
            steps{
                bat 'npm install --prefix ./front run' 
                bat 'npm --prefix ./front run test --watchAll=false --forceExit'
            }
        }
        stage('Deliver'){
            steps{
                bat 'git add .'
                bat 'git commit -m "Code after test passed'
                bat 'git push'
            }
        }
    }
}