pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            args '-p 3002:3002'
        }
    }
    
    environment {
	CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm run test'
                sh 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deliver.sh'                
                		
            }	
        }
    }
    
}
