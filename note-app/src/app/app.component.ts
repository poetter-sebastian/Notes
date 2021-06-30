import {Component, OnInit} from '@angular/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {AuthService} from './auth.service'
import {RemoteManagingService} from './remote-managing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService, private manager: RemoteManagingService) {
  }

  title = '(My™®©℠ Notes™®©℠)™®©℠'

  ngOnInit(): void {
    window.addEventListener('online',  this.onNetworkStatusChange.bind(this))
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this))
    // this.auth.getLoginState()
  }

  onNetworkStatusChange(): void {
    // if app was offline and getting online and push the new notes to the server
    if (this.auth.getOfflineState() && !navigator.onLine) {
      this.manager.pushOfflineNotes()
      // this.manager.setNotes(this.manager.getOfflineNotes()).then()
    }
    // this.auth.setOfflineState(!navigator.onLine)

  }
}
