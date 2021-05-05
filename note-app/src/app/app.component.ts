import {Component, OnInit} from '@angular/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {AuthService} from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  title = '(My™®©℠ Notes™®©℠)™®©℠'

  ngOnInit(): void {
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this))
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this))
  }

  onNetworkStatusChange(): void {
    this.auth.setOfflineState(!navigator.onLine)
    console.log('offline ' + this.auth.getOfflineState())
  }
}
